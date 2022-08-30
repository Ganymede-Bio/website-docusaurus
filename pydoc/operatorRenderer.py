# operatorRenderer.py

import dataclasses
import docspec
import typing as t
from pydoc_markdown.interfaces import Context
from pydoc_markdown.contrib.renderers.markdown import MarkdownRenderer
from pydoc_markdown.contrib.renderers.docusaurus import DocusaurusRenderer

@dataclasses.dataclass
class OperatorRenderer(DocusaurusRenderer):

  markdown: MarkdownRenderer = dataclasses.field(default_factory=MarkdownRenderer)

  def init(self, context: Context) -> None:
    self.markdown.init(context)
    self.render_header = self.markdown._render_header
    self.markdown._render_header = self.custom_header


  def custom_header(self, fp: t.TextIO, level: int, obj: docspec.ApiObject):
    if isinstance(obj, docspec.Class):
        code = ("---\n"
        f"sidebar_label: {obj.name}\n"
        f"title: {obj.name}\n"
        "displayed_sidebar: functionSidebar\n"
        "---\n\n"
        f"## {obj.name}\n\n"
        )
        fp.write(code)
    else:
        self.render_header(fp, level, obj)

