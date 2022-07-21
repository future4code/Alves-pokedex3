export const goToIndex = (navigate) => {
    navigate("/")
}

export const goToDetail = (navigate, name) => {
    navigate(`/detail/${name}`)
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goBack = (navigate) => {
    navigate(-1)
}