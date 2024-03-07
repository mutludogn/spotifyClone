const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b80d26ee26msh356ec746e1203a5p187dbfjsn31b541cc4d33',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

export default class API {
    // kurucu method
    constructor() {
      this.songs = [];
    }
  
    // türkeiyedeki popüler müzikleri alır
    async getPopular() {
      // api isteği at
      const res = await fetch(
        'https://shazam.p.rapidapi.com/charts/track?listId=ip-country-chart-TR&locale=tr',
        options
      );
  
      const data = await res.json();
  
      this.songs = data.tracks;
    }
  
    async searchMusic(query) {
      const res = await fetch(
        `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`,
        options
      );
  
      const data = await res.json();
  
      const formatted = data.tracks.hits.map((song) => {
        return song.track;
      });
  
      this.songs = formatted;
    }
  }