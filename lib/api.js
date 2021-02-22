const { API_URL } = process.env;

export async function getAllEdicoes() {
    const response = await fetch(`${API_URL}/cpt_edicoes?per_page=100`)
    const data = await response.json()
    return data
}

export async function getEdicao(slug) {
    const response = await fetch(`${API_URL}/cpt_edicoes?slug=${slug}`)
    const data = await response.json()
    return data
}

export async function getAllDestaques() {
    const response = await fetch(`${API_URL}/cpt_destaques?per_page=100`)
    const data = await response.json()
    return data
}



export async function getAllLeituras() {
    const response = await fetch(`${API_URL}/cpt_leituras?per_page=100`)
    const data = await response.json()
    return data
}


export async function getAllRealizadores() {
    const response = await fetch(`${API_URL}/cpt_realizadores?per_page=100`)
    const data = await response.json()
    return data
}



export async function getRealizador(slug) {
    const response = await fetch(`${API_URL}/cpt_realizadores?slug=${slug}`)
    const data = await response.json()
    return data
}