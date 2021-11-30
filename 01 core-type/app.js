function generateError(msg, code) {
    throw { msg: msg, code: code };
}
generateError("Something Error", 500);
