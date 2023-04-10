// Save favorites from art gallery

/*export const getSavedArtIds = () => {
    const savedArtIds = localStorage.getItem('saved_art')
      ? JSON.parse(localStorage.getItem('saved_art'))
      : [];
  
    return savedArtIds;
  };
  
  export const saveArtIds = (artIdArr) => {
    if (artIdArr.length) {
      localStorage.setItem('saved_art', JSON.stringify(artIdArr));
    } else {
      localStorage.removeItem('saved_art');
    }
  };
  
  export const removeArtId = (artId) => {
    const savedArtIds = localStorage.getItem('saved_art')
      ? JSON.parse(localStorage.getItem('saved_art'))
      : null;
  
    if (!savedArtIds) {
      return false;
    }
  
    const updatedSavedArtIds = savedArtIds?.filter((savedArtId) => savedArtId !== artId);
    localStorage.setItem('saved_art', JSON.stringify(updatedSavedArtIds));
  
    return true;
  };
  */