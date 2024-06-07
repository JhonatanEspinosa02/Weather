import { useState, useEffect } from "react"

function useDate() {

    const [dateWeather, setDateWeather] = useState<string>('')

    const formatDate = (dateStr: string): string => {
        const dateObj = new Date(dateStr);
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
    
        return new Intl.DateTimeFormat('en-US', options).format(dateObj);
      };

      useEffect(() => {
        const today = new Date();
        const formattedToday = formatDate(today.toISOString());
        setDateWeather(formattedToday);
      }, [])

  return {
    dateWeather
  }
}

export default useDate