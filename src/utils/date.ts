const calcularDiferencaDias = (data: Date) => {
  const dataAtual = new Date();
  const dataFornecida = new Date(data);
  const diferencaTempo = dataAtual.getTime() - dataFornecida.getTime();
  const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
  return diferencaDias;
};

export const formatarDataNotification = (data: Date) => {
  const diferencaDias = calcularDiferencaDias(data);

  if (diferencaDias <= 7) {
    if (diferencaDias === 0) return "hoje";
    return `há ${diferencaDias}d`;
  } else {
    const dataFornecida = new Date(data);
    const dia = String(dataFornecida.getDate()).padStart(2, "0");
    const mes = String(dataFornecida.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
    const ano = dataFornecida.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
};

export const formatDates = (start_date: string, end_date: string): string => {
  const options: Intl.DateTimeFormatOptions = { day: "numeric" };
  const start = new Date(start_date);
  const end = new Date(end_date);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "Datas inválidas";

  const days: string[] = [];
  const currentDate = new Date(start);

  while (currentDate <= end) {
    days.push(currentDate.toLocaleDateString("pt-BR", options));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const month = start
    .toLocaleDateString("pt-BR", { month: "long" })
    .toUpperCase();

  return `${days.join(", ")} ${month}`;
};

export const formatTime = (start_date: string) => {
  if (start_date) {
    const [year, month, day, hours, minutes, seconds] = start_date
      .replace("Z", "")
      .split(/[-T:.]/)
      .map(Number);

    const dateStart = new Date(year, month - 1, day, hours, minutes, seconds);

    return `${dateStart?.getHours().toString().padStart(2, "0")}:${dateStart.getMinutes().toString().padStart(2, "0")}`;
  }
};
export const formatDateInterval = (
  start: string | Date,
  end: string | Date
): string => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  const twoDigits = (n: number) => n.toString().padStart(2, "0");

  const dayStart = startDate.getDate();
  const dayEnd = endDate.getDate();
  const month = twoDigits(endDate.getMonth() + 1);
  const year = endDate.getFullYear();

  if (sameMonth && sameYear) {
    return `${dayStart}–${dayEnd}/${month}/${year}`;
  } else {
    return `${twoDigits(dayStart)}/${twoDigits(startDate.getMonth() + 1)}/${startDate.getFullYear()} – ${twoDigits(dayEnd)}/${month}/${year}`;
  }
};

export const getFormattedDate = (date: string, time?: string) => {
  const timeParts = time ? time.split(":") : ["00", "00"];
  const dateParts = date.split("T");
  const hours = parseInt(timeParts[0]);
  const minutes = parseInt(timeParts[1]);

  // Check if targetDate is already a Date object
  return new Date(`${dateParts[0]} ${hours}:${minutes}`);
};
