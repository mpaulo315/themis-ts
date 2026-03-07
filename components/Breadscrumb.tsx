import { Breadcrumbs, BreadcrumbItem, Chip } from "@heroui/react";
import { useRouter } from "next/navigation";

type Props = {
    data: string[];
};
export default function Breadcrumb({ data }: Props) {
    const router = useRouter();

    return (
        <Breadcrumbs aria-label="breadcrumb" size="md" className="p-1">
            {data.filter(Boolean).map((item, index, array) =>
                index === array.length - 1 ? (
                    <BreadcrumbItem
                        key={index}
                        className="capitalize font-bold"
                        color="foreground"
                    >
                        {item}
                    </BreadcrumbItem>
                ) : (
                    <BreadcrumbItem
                        key={index}
                        onPress={() =>
                            router.push(
                                "/" + array.slice(0, index + 1).join("/"),
                            )
                        }
                        className="capitalize"
                    >
                        {item}
                    </BreadcrumbItem>
                ),
            )}
        </Breadcrumbs>
    );
}
