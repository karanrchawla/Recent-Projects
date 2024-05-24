export default function mapCustomQuery(inputQuery: string) {
    let Table: string = "";
    const keywordMap: { [key: string]: string } = {
        pick: 'SELECT',
        fetch: 'SELECT',
        grab: 'SELECT',
        get: 'SELECT',
        obtain: 'SELECT',
        choose: 'SELECT',
        retrieve: 'SELECT',
        extract: 'SELECT',
        source: 'FROM',
        among: 'FROM',
        filter: "WHERE",
        condition: "WHERE",
        cluster: "GROUP BY",
        assemble: "GROUP BY",
        collect: "GROUP BY",
        sort: "ORDER BY",
        arrange: "ORDER BY",
        organize: "ORDER BY",
        equals: "=",
        $$: "AND",
        also: "AND",
        either: "OR",
        gt: ">",
        lt: "<",
        gte: ">=",
        lte: "<=",
        require: "HAVING",
        within: "IN",
        empty: "IS NULL",
        nempty: "IS NOT NULL",
        highest: "MAX",
        lowest: "MIN",
        middle: "AVG",
        unique: "DISTINCT",
        all: "*",
        total: "COUNT",
        add: "SUM"


    };
    const words = inputQuery.split(' ');
    const processedQuery = words
        .map((word) => {
            const keyword = word.toLowerCase();
            const sqlKeyword = keywordMap[keyword];
            if (keyword === "youtube" || keyword === "spotify") {
                Table = keyword as string
                console.log(Table)

            }
            return sqlKeyword ? sqlKeyword : word;
        })
        .join(' ');


    return { Table: Table, data: processedQuery };

}


