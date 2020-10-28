var hashParams;

let Credentials = () => {

    hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }    
    return hashParams;
}

let gotParams = () => {
    return hashParams;
}

export { Credentials, gotParams };