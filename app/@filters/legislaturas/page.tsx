"use client";

import {
    Button,
    DateRangePicker,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Select,
    SelectItem,
    Slider,
} from "@heroui/react";
import { useCallback, useRef, useState } from "react";
import { IconAdjustments } from "@tabler/icons-react";

function Form({ container }: { container: HTMLElement | null }) {
    return (
        <>
            <Input size="sm" label="Nome" />
            <Slider size="sm" label="Idade" />

            {container && (
                <DateRangePicker
                size="sm"
                    label="Data de nascimento"
                    selectorButtonPlacement="start"
                    popoverProps={{ placement: "left-start",portalContainer: container, shouldFlip: true, radius: "sm" }}
                />
            )}

            <Select size="sm" label="Partido">
                <SelectItem key="1">Partido 1</SelectItem>
                <SelectItem key="2">Partido 2</SelectItem>
                <SelectItem key="3">Partido 3</SelectItem>
            </Select>
        </>
    );
}

export default function FiltersSlot() {
    const [container, setContainer] = useState<HTMLDivElement | null>(null);

    const containerRef = useCallback((node: HTMLDivElement | null) => {
        if (node) setContainer(node);
    }, []);

    return (
        <Popover
            showArrow
            radius="sm"
            placement="bottom-end"
            shouldCloseOnInteractOutside={(el) => {
                const popover = document.querySelector(
                    "[data-slot='popover-content']",
                );
                return !popover?.contains(el);
            }}
        >
            <PopoverTrigger>
                <Button isIconOnly variant="ghost" size="sm"><IconAdjustments stroke={1.25} color="#FFF"/></Button>
            </PopoverTrigger>

            <PopoverContent>
                <div className="flex flex-col" ref={containerRef}>
                    <Form container={container} />
                </div>
            </PopoverContent>
        </Popover>
    );
}
