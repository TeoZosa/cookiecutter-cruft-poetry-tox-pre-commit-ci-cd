window.BENCHMARK_DATA = {
  "lastUpdate": 1631280696238,
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
          "id": "29248b26e1fd1feacbec29db39dc60e284c1769b",
          "message": "Merge pull request #326 from TeoZosa/dependabot/pip/hypothesis-6.20.1",
          "timestamp": "2021-09-10T13:20:30Z",
          "tree_id": "30f82cafa65fc510f51a934cde5b20bbb968eb34"
        },
        "date": 1631280693528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14879.273309542392,
            "unit": "iter/sec",
            "range": "stddev: 0.000012032411643695961",
            "extra": "mean: 67.20758327348413 usec\nrounds: 5572"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5047847.675824858,
            "unit": "iter/sec",
            "range": "stddev: 1.0574804532263676e-8",
            "extra": "mean: 198.10423456101438 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12781.098351894507,
            "unit": "iter/sec",
            "range": "stddev: 0.00002167338791096526",
            "extra": "mean: 78.24053711720111 usec\nrounds: 9268"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150975.16431361076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010020173994805027",
            "extra": "mean: 6.623605972190008 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15445.19808372459,
            "unit": "iter/sec",
            "range": "stddev: 0.000012760614199147464",
            "extra": "mean: 64.74504208876104 usec\nrounds: 10953"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4977514.917386794,
            "unit": "iter/sec",
            "range": "stddev: 7.27198847884854e-8",
            "extra": "mean: 200.90346620703042 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}