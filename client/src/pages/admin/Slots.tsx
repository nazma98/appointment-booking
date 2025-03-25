import { Outlet } from 'react-router';

type SlotProps = {};

export default function Slots({}: SlotProps) {
  return (
    <div>
      Slots
      <Outlet />
    </div>
  );
}

