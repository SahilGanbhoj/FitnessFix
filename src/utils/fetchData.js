export const exerciseOptions = {
    method: 'GET',
   
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Key': '397e5e86eamsh033e26cdcb62a9ap13d44bjsn057c51114c0e',
    }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'dcadf21102mshce4538c166a8b82p1193f8jsnd4d9abca2e8a',
    },
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };

  // try