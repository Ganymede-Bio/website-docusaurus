# operatorRenderer.py
# We need to override the defaults for pydoc and docusaurus since we don't want
# to display file names to users, only class names.
# This is based off of this example:
# https://github.com/NiklasRosenstein/pydoc-markdown/discussions/203#discussioncomment-1192275

import dataclasses
import typing as t
import docspec

from pydoc_markdown.contrib.renderers.docusaurus import DocusaurusRenderer
from pydoc_markdown.contrib.renderers.markdown import MarkdownRenderer
from pydoc_markdown.interfaces import Context


@dataclasses.dataclass
class OperatorRenderer(DocusaurusRenderer):
    markdown: MarkdownRenderer = dataclasses.field(default_factory=MarkdownRenderer)

    def init(self, context: Context) -> None:
        self.markdown.init(context)
        # Save the old header renderer and wrap it in our customization
        self.render_header = self.markdown._render_header
        self.markdown._render_header = self.custom_header

    def custom_header(self, fp: t.TextIO, level: int, obj: docspec.ApiObject):
        if not isinstance(obj, docspec.Class):
            self.render_header(fp, level, obj)

        # if isinstance(obj, docspec.Class):
        #     # If this is a class definition, use it as the header
        #     # see https://github.com/NiklasRosenstein/pydoc-markdown/blob/b15127e3c643976e71a10c7fa4d03297ee616542/src/pydoc_markdown/contrib/renderers/docusaurus.py#L31
        #     code = ("---\n"
        #             f"sidebar_label: {obj.name}\n"
        #             f"title: {obj.name}\n"
        #             "displayed_sidebar: webUiSidebar\n"
        #             "---\n\n")
        #     fp.write(code)
        # else:
        #     self.render_header(fp, level, obj)
