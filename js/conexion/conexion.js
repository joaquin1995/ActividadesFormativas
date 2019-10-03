class Conexion{

    async get(url){
        const datosUrl = await fetch(url);
        const datos  = await datosUrl.json();
        return datos;
    }

    async post(json, url) {
        const  item =  await JSON.stringify(json);
        console.log(item);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'POST',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = res.json();
        console.log({data})
        return data;

    }

   

    async postToken(json, url) {
        console.log(json);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'POST',
            body: json,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        const data = res.json();
        console.log({data})
        return data;
    }

    async put(json, url) {
        const  item =  await JSON.stringify(json);
        console.log(item);
        console.log(url);
        
        const res = await fetch(url, {
            method: 'PUT',
            body: item,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = res.json();
        console.log({data})
        return data;

    }


    getUrl() {
        return `http://localhost:8010/api/`;
    }
    // http://172.27.9.14:9001/api/
    // 190.186.43.205:8080
    
}