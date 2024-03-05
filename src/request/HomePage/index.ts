import request from '../index'

export const login = () =>
  request.post(
    '/tms-dswl/dictionary/selectDictionaryAllByTypeCodes',
    {
      typeCodes: 'OrderEditStatus',
      terminal: 'PC',
      module: 'orderEditApply',
    },
    {
      headers: {
        ContentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsY0lkIjoiMzAwMSIsImludGVyY29ubmVjdENvbXBhbnlDb2RlIjpudWxsLCJkZXB0TmFtZSI6IklU6YOoIiwiZW1wSWQiOiJGRjQzN0QzOUIzN0I0QjgyQTc1MEFGRUQ1OTkxNTE3OCIsImVtcE1vYmlsZSI6IiIsInBhc3N3b3JkVGltZSI6eyJuYW5vcyI6MH0sImdlbmRlciI6IjEiLCJpbnNUaW1lIjp7Im5hbm9zIjowfSwiZW1wVHlwZSI6IiIsImxvZ2luQ29kZSI6Iml0eXlmIiwicmVtYXJrIjoiIiwiZGVwdE5vIjoiV0xCIiwiaXNTYWFzU3lzdGVtIjoiMCIsImludGVyY29ubmVjdENvbXBhbnlJZCI6bnVsbCwidXBkVXNlciI6Iueoi-miliIsInVwZFRpbWUiOnsibmFub3MiOjB9LCJlbXBOYW1lIjoi5p2o5LqR56aPIiwibG9naW5QYXNzd29yZCI6bnVsbCwiaXNJbnRlcmNvbm5lY3QiOm51bGwsImludGVyY29ubmVjdENvbXBhbnlOYW1lIjpudWxsLCJpYXQiOjE3MDk2MjQ1NzM4OTUsImFkZHJlc3MiOiIiLCJhdXRoTG9naW4iOiIxIiwiZGVwdElkIjoiMDAwMDAwIiwiZGVwdFR5cGVDb2RlIjoiMTIwMDUiLCJhY3RpdmUiOiIxIiwiY29tcGFueUlkIjoiMTAwMSIsInNlYXJjaE90aGVyIjoiMSIsImVtcENvZGUiOiJpdHl5Zl8iLCJleHBpcmUiOjE3MDk2MjgxNzM4OTUsImJyYW5kSWQiOiIyMDAxIiwicGFyZW50RW1wQ29kZSI6IiIsImlkY2FyZCI6IiIsInRlbmFudElkIjoiMTAxIiwiaW5zVXNlciI6Iueoi-miliJ9.k8COw_9PlhscAZId9TJHV4W5yez8T7SLkIKksDOW-C4',
      },
    }
  )
