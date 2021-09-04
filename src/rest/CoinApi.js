const COIN_ENDPOINT = "https://crudcrud.com/api/87a64fe652f145e1aafab6594c8229d1/coins"

class CoinApi {

    get = async () => {
        try {
            const resp = await fetch(COIN_ENDPOINT);
            const data = await resp.json();
            return data;
        }
        catch (e) {
            console.log("Something in the get CoinApi went wrong", e);
        }
    }

    add = async (coin) => {
        try {
            await fetch(`${COIN_ENDPOINT}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(coin)
            });
        } catch (e) {
            console.log("Something in the add CoinApi went wrong.", e);
        }
    }

    put = async (coin) => {
        //console.log("We got here");
        //console.log(`${COIN_ENDPOINT}/${coin._id}`);

        try {
            await fetch(`${COIN_ENDPOINT}/${coin._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "year": coin.year, "desc": coin.desc })

            });

        } catch (e) {
            console.log("Something in the put CoinApi went wrong", e);
        }
    }

    delete = async (coin) => {
        try {
            await fetch(`${COIN_ENDPOINT}/${coin._id}`, {
                method: 'DELETE'
            });
        } catch (e) {
            console.log("Something in the delete CoinApi went wrong.", e);
        }
    }

}

export const coinApi = new CoinApi();