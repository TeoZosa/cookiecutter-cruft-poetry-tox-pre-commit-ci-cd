window.BENCHMARK_DATA = {
  "lastUpdate": 1629264845436,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "c20998b1b664a8dfbdf22b904ce2dfeee7dcfdc9",
          "message": "Merge pull request #281 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-182f0ef\n\n⬆️ Bump python from `74f44a8` to `182f0ef` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-08-18T05:29:16Z",
          "tree_id": "01c7bfe45bbd956485f5560ea872a965b6bd5291"
        },
        "date": 1629264843214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16227.516384020433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007018747830782107",
            "extra": "mean: 61.623724563588816 usec\nrounds: 6477"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4971121.834681322,
            "unit": "iter/sec",
            "range": "stddev: 1.300922993851403e-8",
            "extra": "mean: 201.1618369566319 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13348.239121530507,
            "unit": "iter/sec",
            "range": "stddev: 0.00014926764170553275",
            "extra": "mean: 74.9162485699717 usec\nrounds: 8742"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152929.82869958045,
            "unit": "iter/sec",
            "range": "stddev: 4.435670625174263e-7",
            "extra": "mean: 6.538946708456906 usec\nrounds: 41151"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15838.254099999012,
            "unit": "iter/sec",
            "range": "stddev: 0.00010421084257318613",
            "extra": "mean: 63.13827229227635 usec\nrounds: 9824"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4752554.258507207,
            "unit": "iter/sec",
            "range": "stddev: 3.385597060963485e-8",
            "extra": "mean: 210.41316849978793 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}