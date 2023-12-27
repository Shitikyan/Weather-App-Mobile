export interface Location {
  name: string;
  country: string;
}

export interface Weather {
  location: {
    name: string;
    country: string;
  };
  current: {
    condition: {
      text: string;
    };
    temp_c: number;
    wind_kph: number;
    humidity: number;
  };
  forecast: {
    forecastday: {
      astro: {
        sunrise: string;
      };
      date: string;
      day: {
        condition: {
          text: string;
        };
        avgtemp_c: number;
      };
    }[];
  };
}
