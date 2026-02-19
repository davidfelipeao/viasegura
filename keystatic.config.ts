import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    homepage: singleton({
      label: 'Página de Inicio',
      path: 'src/data/homepage',
      format: { data: 'json' },
      schema: {
        // --- SECCIÓN HERO (Ya la tenía) ---
        heroTitle: fields.text({ label: 'Título Principal' }),
        heroSubtitle: fields.text({ label: 'Subtítulo', multiline: true }),
        primaryButtonText: fields.text({ label: 'Texto Botón Principal' }),

        // --- SECCIÓN SERVICIOS (Nueva: Tipo Joomla) ---
        // Esto crea una lista repetible que puede reordenar
        services: fields.array(
          fields.object({
            title: fields.text({ label: 'Nombre del Servicio' }),
            description: fields.text({ label: 'Descripción Corta', multiline: true }),
            icon: fields.text({ 
              label: 'Icono (ej: tabler:server)',
              description: 'Busque iconos en tabler-icons.io' 
            }),
          }),
          {
            label: 'Mis Servicios (Portafolio)',
            itemLabel: props => props.fields.title.value || 'Nuevo Servicio',
          }
        ),
      },
    }),
  },
});
