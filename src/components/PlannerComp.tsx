import { Button, Slider } from "@nextui-org/react";

export const PlannerComp = () => {
  return (
    <div className="bg-default rounded-2xl p-2">
      <h3 className="text-base font-semibold capitalize">mi plan - plus</h3>
      <em className="text-xs">El uso se renueva el: 3-may-23</em>
      <div className="mt-4">
        <Slider
          label="Almacenamiento"
          color="secondary"
          size="sm"
          hideThumb={true}
          defaultValue={782}
          step={1}
          maxValue={1000}
          getValue={(storage) => `${storage}GB / 1TB`}
        />
        <Slider
          label="Banda Mensual"
          color="secondary"
          size="sm"
          hideThumb={true}
          defaultValue={3.2}
          step={0.1}
          maxValue={5}
          getValue={(storage) => `${storage}TB / 5TB`}
        />
      </div>
      <div className="py-4">
        <Button
          className="capitalize"
          color="secondary"
          radius="full"
          size="sm"
        >
          administrar plan
        </Button>
      </div>
    </div>
  );
};
