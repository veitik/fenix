import { Paintbrush, Zap, Wrench, HardHat, Building2, Ruler, Hammer, Settings, Truck, ShieldCheck, PenTool, Layout, Droplets, ArrowRight } from "lucide-react";

export const servicesData = [
  {
    id: "finishing-works",
    title: "Все виды отделочных работ",
    description: "Комплексная отделка помещений любой сложности под ключ с использованием современных материалов.",
    icon: Paintbrush,
  },
  {
    id: "electrical",
    title: "Электромонтажные работы",
    description: "Проектирование и монтаж систем электроснабжения, освещения, замена проводки.",
    icon: Zap,
  },
  {
    id: "engineering-networks",
    title: "Устройство инженерных сетей",
    description: "Монтаж систем вентиляции, отопления и газоснабжения для жилых и промышленных объектов.",
    icon: Wrench,
  },
  {
    id: "earthworks",
    title: "Земляные работы",
    description: "Разработка котлованов, планировка территорий, устройство траншей.",
    icon: Truck,
  },
  {
    id: "piling",
    title: "Свайные работы",
    description: "Погружение и устройство всех видов свай для надежного фундамента.",
    icon: ArrowRight, // Using generic as placeholder
  },
  {
    id: "foundation",
    title: "Фундаментные работы",
    description: "Устройство ленточных, плитных и монолитных фундаментов любой сложности.",
    icon: Building2,
  },
  {
    id: "roofing",
    title: "Устройство и ремонт кровель",
    description: "Монтаж и ремонт мягких и жестких кровель с гарантией от протечек.",
    icon: Layout,
  },
  {
    id: "facades",
    title: "Устройство вентилируемых фасадов",
    description: "Монтаж современных фасадных систем для улучшения энергоэффективности и внешнего вида.",
    icon: ShieldCheck,
  },
  {
    id: "metal-structures",
    title: "Монтаж металлоконструкций",
    description: "Сборка и установка строительных металлических конструкций для промышленных зданий.",
    icon: Hammer,
  },
  {
    id: "masonry",
    title: "Кладочные работы",
    description: "Возведение стен и перегородок из кирпича, пеноблоков и других материалов.",
    icon: Ruler,
  },
  {
    id: "wooden-structures",
    title: "Устройство деревянных конструкций",
    description: "Монтаж стропильных систем, деревянных перекрытий и каркасов.",
    icon: PenTool,
  },
  {
    id: "assembly",
    title: "Монтажные работы",
    description: "Установка технологического оборудования и конструкций.",
    icon: Settings,
  },
  {
    id: "commissioning",
    title: "Пусконаладочные работы",
    description: "Комплексная проверка и настройка смонтированного оборудования.",
    icon: Zap,
  },
  {
    id: "furnaces",
    title: "Ремонт промышленных печей",
    description: "Специализированный ремонт промышленных печей и дымовых труб.",
    icon: Droplets,
  },
  {
    id: "general-contractor",
    title: "Генподряд",
    description: "Полное управление строительным проектом от проектирования до сдачи объекта.",
    icon: HardHat,
  },
];
