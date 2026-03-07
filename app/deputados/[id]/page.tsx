export default async function Deputados({ params }: Promise<any>) {
    const id = (await params).id

    return <>Deputado {id}</>;
}