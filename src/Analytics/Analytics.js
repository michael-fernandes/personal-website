import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
 
export const analytics = Analytics({
  app: 'Analytics',
  plugins: [
    googleAnalytics({
      trackingId: ''
    })
  ]
})
