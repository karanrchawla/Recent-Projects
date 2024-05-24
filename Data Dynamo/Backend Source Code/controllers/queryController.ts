import db from "../DB/database"
import mapCustomQuery from "../DB/mapCustomQuery";

export class QueryController {
  async queryData(body) {
    if (body.query === "") throw {
      code: 400,
      message: "query not found"
    }
    const offset = (body.page - 1) * body.pageSize;
    const limit = body.pageSize;
    const query = mapCustomQuery(body.query);
    if (!query) throw {
      code: 403,
      message: "query not found"
    }
    try {


      const queryResult = await db.query(query.data, [], limit, offset);


      console.log(offset, limit, queryResult)
      return {
        code: 200,
        data: {
          Table: query.Table,
          data: queryResult
        }
      }
    } catch (error) {
      throw {
        code: 400,
        message: error as string
      }
    }
  }

}
