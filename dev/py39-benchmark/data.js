window.BENCHMARK_DATA = {
  "lastUpdate": 1629306094207,
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
          "id": "be25a8bd397a9f0f9428bb687172102a99bc8313",
          "message": "Merge pull request #288 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-4115592\n\n⬆️ Bump python from `182f0ef` to `4115592` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-08-18T16:56:35Z",
          "tree_id": "4287b6f6b44fade97ce689d9abb169ae43160784"
        },
        "date": 1629306092341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16074.291551399718,
            "unit": "iter/sec",
            "range": "stddev: 0.000011733150150611866",
            "extra": "mean: 62.211139869048964 usec\nrounds: 5498"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4971613.403396664,
            "unit": "iter/sec",
            "range": "stddev: 1.4154720905876583e-8",
            "extra": "mean: 201.1419470623828 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13307.206137808804,
            "unit": "iter/sec",
            "range": "stddev: 0.000047761514858000484",
            "extra": "mean: 75.14725402492806 usec\nrounds: 9814"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150545.04897706243,
            "unit": "iter/sec",
            "range": "stddev: 9.232949565173958e-7",
            "extra": "mean: 6.642529972223554 usec\nrounds: 33898"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14107.94379275546,
            "unit": "iter/sec",
            "range": "stddev: 0.00009441297809563618",
            "extra": "mean: 70.88205160793933 usec\nrounds: 10696"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4948147.655401139,
            "unit": "iter/sec",
            "range": "stddev: 1.582946635184859e-8",
            "extra": "mean: 202.09582850878078 nsec\nrounds: 196040"
          }
        ]
      }
    ]
  }
}