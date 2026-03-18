export default async function Legislaturas({ params }: PageProps<'/legislaturas/[id]'>) {
    const {id} = (await params)

    return <>Legislatura {id}</>;
}