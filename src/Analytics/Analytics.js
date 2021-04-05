import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
 
export const analytics = Analytics({
  app: 'Analytics',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-73790222-1'
    })
  ]
})
