'use strict'

const Service = require('egg').Service;

class ProjectsService extends Service {
    async getList() {
        const d = await this.app.mysql.select('projects')
        const result = d.map(val => {
            const obj = {
                projectId: val.project_id,
                name: val.name,
                logo: val.logo
            }
            return obj
        })
        return result
    }
}

module.exports = ProjectsService

