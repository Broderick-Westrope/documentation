import fs from "fs-extra";
import path from "path";

export async function genMarkdownGuides(config) {
  console.log(`generating the full markdown for all guides...`);
  const matchedGuidesPath = path.join(
    config.root_dir,
    config.temp_write_dir,
    config.guide_configs_with_attached_nodes_file_name
  );
  let matchedGuides = await fs.readJSON(matchedGuidesPath);
  const updatedGuides = [];
  for (let guideCfg of matchedGuides.cfgs) {
    guideCfg = await generateGuide(config, guideCfg);
    updatedGuides.push(guideCfg);
  }
  matchedGuides.cfgs = updatedGuides;
  await fs.writeJSON(matchedGuidesPath, matchedGuides);
  return;
}

async function generateGuide(config, guideCfg) {
  console.log(`generating ${guideCfg.title}`);
  let guideStr = await frontmatter(guideCfg);
  for (const section of guideCfg.sections) {
    switch (section.type) {
      case "h2":
        guideStr = `${guideStr}## ${section.node.label}\n\n`;
        guideStr = `${guideStr}${section.node.markdown_content}\n\n`;
        break;
      case "h3":
        guideStr = `${guideStr}### ${section.node.label}\n\n`;
        guideStr = `${guideStr}${section.node.markdown_content}\n\n`;
        break;
      case "h4":
        guideStr = `${guideStr}#### ${section.node.label}\n\n`;
        guideStr = `${guideStr}${section.node.markdown_content}\n\n`;
        break;
      case "p":
        guideStr = `${guideStr}${section.node.markdown_content}\n\n`;
        break;
      case "langtabs":
        const tabStr = await generateLangTabs(section.langtabs);
        guideStr = `${guideStr}${tabStr}`;
        break;
      default:
        console.log("unhandled section type...");
        console.log(JSON.stringify(section));
    }
  }
  guideCfg.markdown_content = guideStr;
  await writeGuide(config, guideCfg);
  return guideCfg;
}

async function generateLangTabs(langtabs) {
  let tabStr = `<Tabs\n`;
  const unavailable = "Content is not available";
  tabStr = `${tabStr}defaultValue="go"\n`;
  tabStr = `${tabStr}groupId="site-lang"\n`;
  tabStr = `${tabStr}values={[{label: 'Go', value: 'go'},{label: 'Java', value: 'java'},{label: 'PHP', value: 'php'},{label: 'Python', value: 'python'},{label: 'Ruby', value: 'ruby'},{label: 'TypeScript', value: 'typescript'},]}>\n\n`;
  for (const tab of langtabs) {
    tabStr = `${tabStr}<TabItem value="${tab.lang}">\n\n`;
    if (tab.id == "none") {
      tabStr = `${tabStr}Content is currently unavailable.\n\n`;
    } else if (tab.id == "na") {
      tabStr = `${tabStr}Not applicable to this SDK.\n\n`;
    } else {
      tabStr = `${tabStr}${tab.node.markdown_content}\n\n`;
    }
    tabStr = `${tabStr}</TabItem>\n`;
  }
  tabStr = `${tabStr}</Tabs>\n\n`;
  return tabStr;
}

async function frontmatter(guideCfg) {
  let guideStr = `---\n`;
  guideStr = `${guideStr}id: ${guideCfg.id}\n`;
  guideStr = `${guideStr}title: ${guideCfg.title}\n`;
  guideStr = `${guideStr}sidebar_label: ${guideCfg.sidebar_label}\n`;
  guideStr = `${guideStr}description: ${guideCfg.description}\n`;
  guideStr = `${guideStr}toc_max_heading_level: ${guideCfg.toc_max_heading_level}\n`;
  guideStr = `${guideStr}---\n\n`;
  guideStr = `${guideStr}<!-- THIS FILE IS GENERATED. DO NOT EDIT THIS FILE DIRECTLY -->\n\n`;
  if (guideCfg.add_tabs_support) {
    guideStr = `${guideStr}import Tabs from '@theme/Tabs';\n`;
    guideStr = `${guideStr}import TabItem from '@theme/TabItem';\n\n`;
  }
  if (guideCfg.use_description) {
    guideStr = `${guideStr}${guideCfg.description}\n\n`;
  }
  return guideStr;
}

async function writeGuide(config, guideCfg) {
  let writePath = "";
  if (guideCfg.file_dir != "/") {
    writePath = path.join(
      config.root_dir,
      config.content_write_dir,
      guideCfg.file_dir,
      guideCfg.file_name
    );
  } else {
    writePath = path.join(
      config.root_dir,
      config.content_write_dir,
      guideCfg.file_name
    );
  }
  await fs.writeFile(writePath, guideCfg.markdown_content);
}
