const COIN_ENDPOINT = "https://crudcrud.com/api/87a64fe652f145e1aafab6594c8229d1/stamps"

class StampApi {

    get = async () => {
        try {
            const resp = await fetch(COIN_ENDPOINT);
            const data = await resp.json();
            return data;
        }
        catch (e) {
            console.log("Something in the get StampApi went wrong", e);
        }
    }

    add = async (stamp) => {
        try {
            await fetch(`${COIN_ENDPOINT}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(stamp)
            });
        } catch (e) {
            console.log("Something in the add StampApi went wrong.", e);
        }
    }

    put = async (stamp) => {
        //console.log("We got here");
        //console.log(`${COIN_ENDPOINT}/${stamp._id}`);

        try {
            await fetch(`${COIN_ENDPOINT}/${stamp._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "year": stamp.year, "desc": stamp.desc })

            });

        } catch (e) {
            console.log("Something in the put StampApi went wrong", e);
        }
    }

    delete = async (stamp) => {
        try {
            await fetch(`${COIN_ENDPOINT}/${stamp._id}`, {
                method: 'DELETE'
            });
        } catch (e) {
            console.log("Something in the delete StampApi went wrong.", e);
        }
    }

}

export const stampApi = new StampApi();