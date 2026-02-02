import { useSuspenseQuery } from "@tanstack/react-query";
import { Card } from "antd";

const IndexPage = () => {
    const { data } = useSuspenseQuery({
        queryKey: ["query"],
        queryFn: async () => {
            await new Promise((res) => setTimeout(res, 10000));
            return { message: "Loaded" };
        },
    });

    return (
        <Card>
            <h1>{data?.message}</h1>
        </Card>
    );
};

export default IndexPage;
