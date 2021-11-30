function generateError(msg: string, code: number) : never{
  throw { msg, code };
}

generateError("Something Error", 500);
