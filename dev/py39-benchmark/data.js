window.BENCHMARK_DATA = {
  "lastUpdate": 1628520683489,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "cd1c0294ba5baffc328f33149211762210cad974",
          "message": "Merge pull request #277 from TeoZosa/dependabot/pip/types-emoji-1.2.4",
          "timestamp": "2021-08-09T14:37:47Z",
          "tree_id": "58e03962b8be29b8b966d7aff557e3f3a11aa483"
        },
        "date": 1628520681286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14460.281072387956,
            "unit": "iter/sec",
            "range": "stddev: 0.00002606916700147251",
            "extra": "mean: 69.15494899400743 usec\nrounds: 11724"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3836545.5712601026,
            "unit": "iter/sec",
            "range": "stddev: 2.8818856883808874e-7",
            "extra": "mean: 260.6511460443484 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11876.702874709943,
            "unit": "iter/sec",
            "range": "stddev: 0.00005636133181906409",
            "extra": "mean: 84.19845225979203 usec\nrounds: 8599"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 117864.28167668785,
            "unit": "iter/sec",
            "range": "stddev: 0.000005205412945774873",
            "extra": "mean: 8.484334573412907 usec\nrounds: 40323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14625.253919709461,
            "unit": "iter/sec",
            "range": "stddev: 0.00005392327003797829",
            "extra": "mean: 68.37488124923206 usec\nrounds: 10661"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3857048.7207395905,
            "unit": "iter/sec",
            "range": "stddev: 4.520828071021473e-7",
            "extra": "mean: 259.2655868263665 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}