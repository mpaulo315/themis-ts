export default async function Legislaturas({ params }: Promise<any>) {
    const id = (await params).id

    return <>Legislatura {id}</>;
}