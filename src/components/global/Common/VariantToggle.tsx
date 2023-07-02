import { useStoreActions, useStoreState } from "easy-peasy";
import { Group, Radio } from "@mantine/core";

export default function VariantToggle() {

  const { setVariant } = useStoreActions((actions: any) => actions.global);
  const { variant } = useStoreState((state: any) => state.global);

  return (
    <>
      <div className="flex items-center mr-4 mb-2 select-none">
        <Radio.Group
          name="variant"
          value={variant}
          onChange={(e) => setVariant(e)}
        >
          <Group mt="xs">
            <p className="text-white ">VA</p>
            <Radio value="A" label="" />
            <p className="text-white">VB</p>
            <Radio value="B" label="" />
          </Group>
        </Radio.Group>
      </div>
    </>
  );
}
