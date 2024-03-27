const iife = (() => {
    const setSrcMultimedia = (url, id) => {
      let elemento = document.getElementById(`${id}`);
      elemento.setAttribute('src', url);
    };
  
    return {
      play(url, id){
        setSrcMultimedia(url, id);
      }
    }
  })();
  
  class Multimedia{
    constructor(url){
      this._url = url;
    }
    get url(){
      return this._url;
    }
    set url(nuevaUrl){
      this._url = nuevaUrl;
    }
  
    setInicio(){
      return 'Este método es para realizar un cambio en la URL del video';
    }
  }
  
  class Reproductor extends Multimedia{
    constructor(url, id){
      super(url);
      this._id = id;
    }
    get id(){
      return this._id;
    }
    set id(nuevaId){
      this._id = nuevaId;
    }
    playMultimedia(){
      iife.play(this.url, this._id);
    }
    setInicio(ms){
      this.url = `${this.url}?start=${ms}`;
    }
  }
  
  const music = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'musica');
  const movie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'peliculas');
  const serie = new Reproductor('https://www.youtube.com/embed/5PSNL1qE6VY', 'series');
  
  
  movie.setInicio(105);
  
  music.playMultimedia();
  serie.playMultimedia();
  movie.playMultimedia();