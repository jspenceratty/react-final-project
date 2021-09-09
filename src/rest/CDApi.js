const CD_ENDPOINT = "https://crudcrud.com/api/87a64fe652f145e1aafab6594c8229d1/cds"

class CDApi {

    get = async () => {
        try {
            const resp = await fetch(CD_ENDPOINT);
            const data = await resp.json();
            return data;
        }
        catch (e) {
            console.log("Something in the get CdApi went wrong", e);
        }
    }

    add = async (cd) => {
        try {
            await fetch(`${CD_ENDPOINT}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cd)
            });
        } catch (e) {
            console.log("Something in the add CdApi went wrong.", e);
        }
    }

    put = async (cd) => {
        //console.log("We got here");
        //console.log(`${CD_ENDPOINT}/${cd._id}`);

        try {
            await fetch(`${CD_ENDPOINT}/${cd._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "title": cd.title, "artist": cd.artist })

            });

        } catch (e) {
            console.log("Something in the put CdApi went wrong", e);
        }
    }

    delete = async (cd) => {
        try {
            await fetch(`${CD_ENDPOINT}/${cd._id}`, {
                method: 'DELETE'
            });
        } catch (e) {
            console.log("Something in the delete CdApi went wrong.", e);
        }
    }

}

export const cdApi = new CDApi();