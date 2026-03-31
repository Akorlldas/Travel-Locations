import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || null;
const STORAGE_KEY = "worldwise-cities";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });

      try {
        if (!BASE_URL) {
          const localCities =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
          dispatch({ type: "cities/loaded", payload: localCities });
          return;
        }

        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        dispatch({ type: "cities/loaded", payload: localCities });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });

      try {
        if (!BASE_URL) {
          const localCities =
            JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
          const city =
            localCities.find((c) => String(c.id) === String(id)) || {};
          dispatch({ type: "city/loaded", payload: city });
          return;
        }

        const res = await fetch(`${BASE_URL}/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch {
        const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const city = localCities.find((c) => String(c.id) === String(id)) || {};
        dispatch({ type: "city/loaded", payload: city });
      }
    },
    [currentCity.id],
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    try {
      if (!BASE_URL) {
        const localCity = { ...newCity, id: Date.now() };
        const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const nextCities = [...localCities, localCity];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCities));
        dispatch({ type: "city/created", payload: localCity });
        return;
      }

      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({ type: "city/created", payload: data });
    } catch {
      const localCity = { ...newCity, id: Date.now() };
      const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nextCities = [...localCities, localCity];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCities));
      dispatch({ type: "city/created", payload: localCity });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });

    try {
      if (!BASE_URL) {
        const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        const nextCities = localCities.filter((city) => city.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCities));
        dispatch({ type: "city/deleted", payload: id });
        return;
      }

      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "city/deleted", payload: id });
    } catch {
      const localCities = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
      const nextCities = localCities.filter((city) => city.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextCities));
      dispatch({ type: "city/deleted", payload: id });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
