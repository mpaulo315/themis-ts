export const getLegislaturas = async () => {
    const response = await fetch('/api/legislaturas')
    const data = await response.json()
    return data
}
