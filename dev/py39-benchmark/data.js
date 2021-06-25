window.BENCHMARK_DATA = {
  "lastUpdate": 1624638398654,
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
          "id": "8c85bd834229611483ecf0adbb1bc46a861cb8d7",
          "message": "Merge pull request #222 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-b9f31c7\n\n⬆️ Bump python from `8349e05` to `b9f31c7` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-06-25T16:22:14Z",
          "tree_id": "5134ef6368397fe53ab6514087ca7c5b5c404230"
        },
        "date": 1624638396985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14605.449896316995,
            "unit": "iter/sec",
            "range": "stddev: 0.000017349877792031722",
            "extra": "mean: 68.46759306278996 usec\nrounds: 5593"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5332765.3423575675,
            "unit": "iter/sec",
            "range": "stddev: 2.9748942309538557e-7",
            "extra": "mean: 187.5199705595969 nsec\nrounds: 62500"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12460.846676584224,
            "unit": "iter/sec",
            "range": "stddev: 0.000015913126981999576",
            "extra": "mean: 80.25136862322108 usec\nrounds: 2862"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 155462.80858620245,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032765197842544547",
            "extra": "mean: 6.432406625701161 usec\nrounds: 3743"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14731.004594143515,
            "unit": "iter/sec",
            "range": "stddev: 0.00004810565708600025",
            "extra": "mean: 67.88403286477568 usec\nrounds: 14514"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5039382.078742692,
            "unit": "iter/sec",
            "range": "stddev: 1.0634738302240088e-7",
            "extra": "mean: 198.43702747161035 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}