export const goToIndex = (navigate) => {
    navigate("/")
}

export const goToDetail = (navigate, name) => {
    navigate(`/detail/${name}`)
}
export const goToDetailPokedex = (navigate, name) => {
    navigate(`/pokedex/detail/${name}`)
}

export const goToHomeNext = (navigate, number) => {
    navigate(`/${number}`)
    if(+number < 0) {
        navigate(`/${0}`)
    }
}

export const goToPokedex = (navigate) => {
    navigate("/pokedex")
}

export const goBack = (navigate) => {
    navigate(-1)
}