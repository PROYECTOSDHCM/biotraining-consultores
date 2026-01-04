import React from 'react';

function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            <div className="badge mb-lg animate-fade-in-up">
              🚀 Plataforma SaaS de Automatización
            </div>
            
            <h1 className="animate-fade-in-up">
              Automatiza tu Marketing Digital sin Código
            </h1>
            
            <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Crea workflows de marketing automatizado para email, redes sociales, lead nurturing y más. 
              Más económico que HubSpot, Zapier o ActiveCampaign.
            </p>
            
            <div className="flex gap-md justify-center mt-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#pricing" className="btn btn-primary btn-large">
                Ver Planes y Precios
              </a>
              <a href="#features" className="btn btn-secondary btn-large">
                Conocer Más
              </a>
            </div>
            
            <div className="mt-2xl text-muted">
              ✓ Sin tarjeta de crédito &nbsp;&nbsp; ✓ Configuración en minutos &nbsp;&nbsp; ✓ Soporte en español
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="section section-alt">
        <div className="container">
          <div className="text-center mb-2xl">
            <h2>Todo lo que Necesitas para Automatizar tu Marketing</h2>
            <p className="text-secondary">
              Potencia tu negocio con automatizaciones inteligentes sin necesidad de programar
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="icon-wrapper">📧</div>
              <h3>Email Marketing Automatizado</h3>
              <p>
                Crea campañas de email personalizadas que se envían automáticamente según el comportamiento 
                de tus leads. Segmentación inteligente y seguimiento en tiempo real.
              </p>
            </div>
            
            <div className="card">
              <div className="icon-wrapper">📱</div>
              <h3>Publicación en Redes Sociales</h3>
              <p>
                Programa y publica contenido en Facebook, Instagram, LinkedIn y Twitter desde un solo lugar. 
                Mantén tu presencia activa sin esfuerzo manual.
              </p>
            </div>
            
            <div className="card">
              <div className="icon-wrapper">🎯</div>
              <h3>Lead Nurturing Inteligente</h3>
              <p>
                Cultiva relaciones con tus prospectos mediante secuencias automatizadas. 
                Convierte más leads en clientes con el mensaje correcto en el momento perfecto.
              </p>
            </div>
            
            <div className="card">
              <div className="icon-wrapper">🔗</div>
              <h3>Integración con CRMs</h3>
              <p>
                Conecta con HubSpot, Salesforce, Pipedrive y más. Sincroniza datos automáticamente 
                y mantén tu información actualizada en todos tus sistemas.
              </p>
            </div>
            
            <div className="card">
              <div className="icon-wrapper">📊</div>
              <h3>Reportes Automáticos</h3>
              <p>
                Recibe informes detallados de tus métricas de marketing directamente en tu email. 
                Toma decisiones basadas en datos sin perder tiempo en análisis manuales.
              </p>
            </div>
            
            <div className="card">
              <div className="icon-wrapper">⚡</div>
              <h3>Workflows Sin Código</h3>
              <p>
                Crea automatizaciones complejas con nuestra interfaz visual drag-and-drop. 
                No necesitas conocimientos técnicos, solo tu creatividad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-2xl">
            <h2>¿Por Qué Elegir BioTraining Consultores?</h2>
            <p className="text-secondary">
              La solución más completa y económica para PYMEs que quieren crecer
            </p>
          </div>
          
          <div className="grid grid-2 gap-xl">
            <div className="card">
              <h3>💰 Ahorra Hasta 70% vs Competidores</h3>
              <p className="mb-md">Comparación de precios mensuales:</p>
              <ul className="features-list">
                <li>HubSpot Marketing: $800/mes</li>
                <li>ActiveCampaign: $229/mes</li>
                <li>Zapier Premium: $599/mes</li>
                <li><strong>BioTraining: Desde $29/mes</strong></li>
              </ul>
            </div>
            
            <div className="card">
              <h3>⏱️ Recupera 20+ Horas al Mes</h3>
              <p className="mb-md">Automatiza tareas repetitivas:</p>
              <ul className="features-list">
                <li>Envío manual de emails</li>
                <li>Publicaciones en redes sociales</li>
                <li>Actualización de CRM</li>
                <li>Generación de reportes</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>📈 Aumenta tu ROI de Marketing</h3>
              <p className="mb-md">Resultados comprobados:</p>
              <ul className="features-list">
                <li>+45% en tasa de conversión de leads</li>
                <li>+60% en engagement de email</li>
                <li>+35% en productividad del equipo</li>
                <li>-50% en costos operativos</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>🛠️ Implementación Rápida</h3>
              <p className="mb-md">Comienza en minutos:</p>
              <ul className="features-list">
                <li>Configuración guiada paso a paso</li>
                <li>Plantillas pre-diseñadas</li>
                <li>Soporte en español 24/7</li>
                <li>Capacitación incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="section section-alt">
        <div className="container">
          <div className="text-center mb-2xl">
            <h2>Planes Diseñados para tu Crecimiento</h2>
            <p className="text-secondary">
              Elige el plan perfecto para tu negocio. Todos incluyen soporte en español.
            </p>
          </div>
          
          <div className="grid grid-3">
            {/* PLAN BÁSICO */}
            <div className="pricing-card">
              <h3>Plan Básico</h3>
              <div className="price">
                $29
                <span className="price-period">/mes</span>
              </div>
              <p className="text-secondary mb-lg">Perfecto para emprendedores</p>
              
              <ul className="features-list">
                <li>1,000 ejecuciones/mes</li>
                <li>3 workflows activos</li>
                <li>Email marketing básico</li>
                <li>2 integraciones</li>
                <li>Soporte por email</li>
                <li>Reportes semanales</li>
              </ul>
              
              <a href="https://hotmart.com/es/marketplace/productos/biotraining-basico" 
                 className="btn btn-secondary mt-lg" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Comenzar Ahora
              </a>
            </div>
            
            {/* PLAN PRO - DESTACADO */}
            <div className="pricing-card featured">
              <div className="badge badge-success mb-md">Más Popular</div>
              <h3>Plan Pro</h3>
              <div className="price">
                $79
                <span className="price-period">/mes</span>
              </div>
              <p className="text-secondary mb-lg">Ideal para pequeñas empresas</p>
              
              <ul className="features-list">
                <li>10,000 ejecuciones/mes</li>
                <li>Workflows ilimitados</li>
                <li>Email marketing avanzado</li>
                <li>10 integraciones</li>
                <li>Soporte prioritario</li>
                <li>Reportes diarios</li>
                <li>A/B Testing</li>
                <li>Segmentación avanzada</li>
              </ul>
              
              <a href="https://hotmart.com/es/marketplace/productos/biotraining-pro" 
                 className="btn btn-primary mt-lg" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Comenzar Ahora
              </a>
            </div>
            
            {/* PLAN BUSINESS */}
            <div className="pricing-card">
              <h3>Plan Business</h3>
              <div className="price">
                $199
                <span className="price-period">/mes</span>
              </div>
              <p className="text-secondary mb-lg">Para empresas en crecimiento</p>
              
              <ul className="features-list">
                <li>Ejecuciones ilimitadas</li>
                <li>Workflows ilimitados</li>
                <li>Suite completa de marketing</li>
                <li>Integraciones ilimitadas</li>
                <li>Soporte 24/7 dedicado</li>
                <li>Reportes personalizados</li>
                <li>Capacitación personalizada</li>
                <li>Consultoría estratégica</li>
                <li>API personalizada</li>
              </ul>
              
              <a href="https://hotmart.com/es/marketplace/productos/biotraining-business" 
                 className="btn btn-secondary mt-lg" 
                 target="_blank" 
                 rel="noopener noreferrer">
                Comenzar Ahora
              </a>
            </div>
          </div>
          
          <div className="text-center mt-2xl">
            <p className="text-secondary">
              💳 Pagos seguros procesados por Hotmart &nbsp;&nbsp;|&nbsp;&nbsp; 
              🔒 Garantía de 30 días &nbsp;&nbsp;|&nbsp;&nbsp; 
              ✓ Cancela cuando quieras
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="section">
        <div className="container">
          <div className="text-center mb-2xl">
            <h2>Preguntas Frecuentes</h2>
            <p className="text-secondary">
              Resolvemos tus dudas sobre la plataforma
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="faq-item">
              <div className="faq-question">¿Necesito conocimientos técnicos?</div>
              <div className="faq-answer">
                No. Nuestra plataforma está diseñada para ser usada por cualquier persona sin conocimientos 
                de programación. Usamos una interfaz visual drag-and-drop muy intuitiva.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">¿Qué incluye cada ejecución?</div>
              <div className="faq-answer">
                Una ejecución es cada vez que se activa un workflow. Por ejemplo, enviar un email automático 
                a un nuevo lead cuenta como 1 ejecución.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">¿Puedo cambiar de plan después?</div>
              <div className="faq-answer">
                Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan 
                inmediatamente y se ajusta la facturación proporcionalmente.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">¿Qué integraciones están disponibles?</div>
              <div className="faq-answer">
                Conectamos con más de 200 aplicaciones incluyendo Gmail, Mailchimp, HubSpot, Salesforce, 
                Slack, Google Sheets, Facebook, Instagram, LinkedIn y muchas más.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">¿Ofrecen capacitación?</div>
              <div className="faq-answer">
                Sí. Todos los planes incluyen documentación completa y videos tutoriales. Los planes Pro y 
                Business incluyen sesiones de capacitación en vivo.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">¿Hay garantía de devolución?</div>
              <div className="faq-answer">
                Ofrecemos garantía de satisfacción de 30 días. Si no estás satisfecho, te devolvemos 
                el 100% de tu dinero sin preguntas.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="mb-lg">¿Listo para Automatizar tu Marketing?</h2>
          <p className="text-secondary mb-xl" style={{ fontSize: 'var(--font-size-xl)' }}>
            Únete a cientos de empresas que ya están ahorrando tiempo y aumentando sus ventas
          </p>
          <a href="#pricing" className="btn btn-primary btn-large">
            Ver Planes y Comenzar Ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>BioTraining Consultores</h4>
              <p>
                Plataforma SaaS de automatización de marketing digital para PYMEs. 
                Potenciado por n8n, diseñado para resultados.
              </p>
              <p className="mt-md">
                <strong>Email:</strong> dcmgrupoacademia@gmail.com
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Producto</h4>
              <a href="#features">Características</a>
              <a href="#pricing">Precios</a>
              <a href="#faq">Preguntas Frecuentes</a>
              <a href="https://hotmart.com/es/marketplace/productos/biotraining-basico">Comenzar Gratis</a>
            </div>
            
            <div className="footer-section">
              <h4>Recursos</h4>
              <a href="#">Documentación</a>
              <a href="#">Tutoriales</a>
              <a href="#">Blog</a>
              <a href="#">Soporte</a>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <a href="#">Términos de Servicio</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Política de Cookies</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2026 BioTraining Consultores. Todos los derechos reservados.</p>
            <p className="mt-sm">biotrainingconsultores.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;