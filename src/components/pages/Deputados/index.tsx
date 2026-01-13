import ToggleButton from "@/components/buttons/ToggleButton";
import DepCard from "@/components/cards/DepCard";
import DataDialog from "@/components/cards/DepCard/DataDialog";
import HDepCard from "@/components/cards/HDepCard";
import DepList from "@/components/lists/DepList";
import { useDeputados } from "@/hooks/Deputados";
import {
  Box,
  createListCollection,
  Group,
  Heading,
  Portal,
  SegmentGroup,
  Select,
} from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { TbCapsule, TbCapsuleHorizontal } from "react-icons/tb";

type CountSelectorProps = {
  label?: string;
  options: number[];
  value: number;
  onChange: (value: number) => void;
};

const CountSelector = ({
  label,
  options,
  value,
  onChange,
}: CountSelectorProps) => {
  const collection = createListCollection({
    items: options.map((option) => ({
      value: option,
      label: option.toString(),
    })),
  });

  return (
    <Select.Root
      collection={collection}
      value={[value.toString()]}
      onValueChange={(e) => onChange(Number(e.value[0]))}
      size="xs"
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText>{value}</Select.ValueText>
        </Select.Trigger>

        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.label}>
                {item.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

const Deputados = () => {
  const { data } = useDeputados();
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [cardFormat, setCardFormat] = useState("vertical");

  const dataSlice = useMemo(
    () => data.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [data, page, itemsPerPage]
  );

  const renderPage = useCallback(
    (item: any, _: number, __: any[]) => <DepCard {...item} />,
    [dataSlice]
  );
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width="100%"
      height="100%"
    >
      <Heading>Deputados</Heading>

      <Group
        display="flex"
        direction="row"
        gap={2}
        alignItems="flex-end"
        width={250}
      >
        <CountSelector
          label="Items per page"
          options={[10, 20, 50, 100]}
          value={itemsPerPage}
          onChange={(value) => setItemsPerPage(value)}
        />

        <SegmentGroup.Root
          size="sm"
          value={cardFormat}
          onValueChange={(e) => setCardFormat(e.value!)}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              { value: "horizontal", label: <TbCapsuleHorizontal /> },
              { value: "vertical", label: <TbCapsule /> },
            ]}
          />
        </SegmentGroup.Root>
      </Group>

      <DepList
        page={page}
        setPage={setPage}
        dataLength={data.length}
        itemsPerPage={itemsPerPage}
        data={dataSlice}
        dataRenderer={renderPage}
      />
    </Box>
  );
};

export default Deputados;
