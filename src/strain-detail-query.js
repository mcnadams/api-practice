export function getInfoFromQuery(urlQuery) {
    const searchParams = new URLSearchParams(urlQuery);
    const param = searchParams.get('id');
    const nameAndId = param.split('-');
    return nameAndId;
}
