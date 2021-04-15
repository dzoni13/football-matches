const FootballService = {
    getProducts(year) {
        return fetch(`/api/football_competitions?year=${year}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());
    }
};

export default FootballService;