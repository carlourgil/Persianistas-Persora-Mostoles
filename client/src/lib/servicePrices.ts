// Tarifas iniciales facilitadas por el propietario.
export const servicePrices = {
  reparacion: { amount: 75, from: true, label: 'Desde 75 €' },
  instalacion: { amount: 170, from: true, label: 'Desde 170 €' },
  motorizacion: { amount: 290, from: true, label: 'Desde 290 €' },
  mantenimiento: { amount: 60, from: true, label: 'Desde 60 €' },
} as const;
