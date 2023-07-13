import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export default function Lapse() {
  return (
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title>💌 Elegi tu auto</Timeline.Title>
          <Timeline.Time>Released on December 2, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title>🤝 Decidi como pagar</Timeline.Title>
          <Timeline.Time>Released on December 23, 2021</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Title>🤩 Y tenelo en 10 dias</Timeline.Title>
          <Timeline.Time>Released on January 5, 2022</Timeline.Time>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
