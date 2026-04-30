import React, { createContext, useContext, useState } from "react";

// Context สำหรับเก็บ uuid ของหุ่นยนต์ที่ถูกเลือก
// ใช้แชร์ค่าข้ามหน้าได้โดยไม่ต้องส่ง params ผ่าน Navigation
const RobotContext = createContext<{
  uuid: string;
  setUuid: (uuid: string) => void;
}>({
  uuid: "",
  setUuid: () => {},
});

export function RobotProvider({ children }: { children: React.ReactNode }) {
  const [uuid, setUuid] = useState("");
  return (
    <RobotContext.Provider value={{ uuid, setUuid }}>
      {children}
    </RobotContext.Provider>
  );
}

// Hook สำหรับเข้าถึง uuid จากทุก Component
export const useRobot = () => useContext(RobotContext);
