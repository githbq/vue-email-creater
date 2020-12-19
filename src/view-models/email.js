// 项目具体事项
function ProjectItem({ title, subItems }) {
    this.title = title
    this.subItems = subItems || []
}

// 项目 
function Project({ name, type, projectItems, projectItems }) {
    this.name = name
    this.type = type
    this.projectItems = projectItems || []

}
// 大纲
function Outline({ title, defaultValue, projects }) {
    this.title = title
    this.defaultValue = defaultValue || '暂无'
    this.projects = projects || []
}